using Localization.Resources.AbpUi;
using CompanyName.ProjectName.ModuleName.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace CompanyName.ProjectName.ModuleName;

[DependsOn(
    typeof(ModuleNameApplicationContractsModule),
    typeof(AbpAspNetCoreMvcModule))]
public class ModuleNameHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(ModuleNameHttpApiModule).Assembly);
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<ModuleNameResource>()
                .AddBaseTypes(typeof(AbpUiResource));
        });
    }
}
