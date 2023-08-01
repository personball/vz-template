using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace CompanyName.ProjectName.ModuleName;

[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(ModuleNameDomainSharedModule)
)]
public class ModuleNameDomainModule : AbpModule
{

}
