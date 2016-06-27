using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Keypoint.Startup))]
namespace Keypoint
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
