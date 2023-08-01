using CompanyName.ProjectName.ModuleName.Localization;
using Volo.Abp.Application.Services;

namespace CompanyName.ProjectName.ModuleName;

public abstract class ModuleNameAppService : ApplicationService
{
    protected ModuleNameAppService()
    {
        LocalizationResource = typeof(ModuleNameResource);
        ObjectMapperContext = typeof(ModuleNameApplicationModule);
    }
}
