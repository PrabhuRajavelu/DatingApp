namespace API.Interface
{
    public interface ITokenService
    {
        public string CreateToken(AppUser user);
    }
}