using CompanyName.ProjectName.ModuleName.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace CompanyName.ProjectName.ModuleName;

public abstract class ModuleNameController : AbpControllerBase
{
    protected ModuleNameController()
    {
        LocalizationResource = typeof(ModuleNameResource);
    }
}
