using CompanyName.ProjectName.ModuleName.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace CompanyName.ProjectName.ModuleName;

/* Domain tests are configured to use the EF Core provider.
 * You can switch to MongoDB, however your domain tests should be
 * database independent anyway.
 */
[DependsOn(
    typeof(ModuleNameEntityFrameworkCoreTestModule)
    )]
public class ModuleNameDomainTestModule : AbpModule
{

}
