using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace CompanyName.ProjectName.ModuleName;

[DependsOn(
    typeof(ModuleNameDomainSharedModule),
    typeof(AbpDddApplicationContractsModule),
    typeof(AbpAuthorizationModule)
    )]
public class ModuleNameApplicationContractsModule : AbpModule
{

}
