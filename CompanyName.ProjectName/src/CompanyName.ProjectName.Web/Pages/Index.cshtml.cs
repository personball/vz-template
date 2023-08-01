using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace CompanyName.ProjectName.Web.Pages;

public class IndexModel : ProjectNamePageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
