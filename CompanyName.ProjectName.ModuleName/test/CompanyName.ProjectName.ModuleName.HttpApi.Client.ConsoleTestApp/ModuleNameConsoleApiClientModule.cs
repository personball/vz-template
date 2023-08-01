using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace CompanyName.ProjectName.ModuleName;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(ModuleNameHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class ModuleNameConsoleApiClientModule : AbpModule
{

}
