using Volo.Abp.Modularity;

namespace CompanyName.ProjectName.ModuleName;

[DependsOn(
    typeof(ModuleNameApplicationModule),
    typeof(ModuleNameDomainTestModule)
    )]
public class ModuleNameApplicationTestModule : AbpModule
{

}
