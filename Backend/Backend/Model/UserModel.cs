namespace Backend.Model
{
    public class UserModel
    {
        public string UserName { get; set; }

        public string Password { get; set; }
        public UserModel()
        {
            if(UserName == null)
            {
                UserName = "";
            }
            if (Password == null)
            {
                Password = "";
            }
        }
    }
}
