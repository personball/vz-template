using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;

namespace CompanyName.ProjectName.ModuleName.Samples;

[Area(ModuleNameRemoteServiceConsts.ModuleName)]
[RemoteService(Name = ModuleNameRemoteServiceConsts.RemoteServiceName)]
[Route("api/ModuleName/sample")]
public class SampleController : ModuleNameController, ISampleAppService
{
    private readonly ISampleAppService _sampleAppService;

    public SampleController(ISampleAppService sampleAppService)
    {
        _sampleAppService = sampleAppService;
    }

    [HttpGet]
    public async Task<SampleDto> GetAsync()
    {
        return await _sampleAppService.GetAsync();
    }

    [HttpGet]
    [Route("authorized")]
    [Authorize]
    public async Task<SampleDto> GetAuthorizedAsync()
    {
        return await _sampleAppService.GetAsync();
    }
}
