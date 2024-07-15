using Backend.Data;
using Backend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _congig;
        private readonly DapperContext _dapper;
        public UserController(IConfiguration config) {
            _congig = config;
            _dapper =new DapperContext(config);
        }

        [HttpGet("/getUser")]
        public IEnumerable<UserModel> GetUsers()
        {
            string sql = "select * from ang.users";
            return _dapper.LoadData<UserModel>(sql);
        }
        [HttpGet("/getUser/{uname}")]
        public IEnumerable<UserModel> Getsingleuser([FromRoute]string uname)
        {
            string sql = "select * from ang.users where userName='"+uname+"'";
            return _dapper.LoadData<UserModel>(sql);
        }


        [HttpPost("/post")]
        public IActionResult Post(UserModel userModel) {
            string sql = "insert into ang.users values('" + userModel.UserName + "','" + userModel.Password + "') ";
            if (_dapper.ExecuteSql(sql))
            {
                return Ok(userModel);
            }
            else
            {
                return StatusCode(400, "not added");
            }
            
        }
        [HttpPut("/putuser/{uname}")]
        public IActionResult Put(UserModel userModel,string uname)
        {
            string sql = "update ang.users set UserName='" + userModel.UserName + "',Password='" + userModel.Password + "' where UserName='"+uname+"'";
            if (_dapper.ExecuteSql(sql))
            {
                return Ok();
            }
            else
            {
                return StatusCode(400, "not updateted");
            }
        }
        [HttpDelete("/deleteuser/{username}")]
        public IActionResult Delete(string username)
        {
            string sql = "delete from ang.users where UserName='" + username + "'";
            if(_dapper.ExecuteSql(sql))
            {
                return Ok();
            }
            else
            {
                return StatusCode(400, "not deleted");
            }
        }

    }
}
