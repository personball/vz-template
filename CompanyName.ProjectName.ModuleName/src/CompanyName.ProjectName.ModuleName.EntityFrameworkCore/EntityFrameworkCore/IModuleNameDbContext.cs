using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace CompanyName.ProjectName.ModuleName.EntityFrameworkCore;

[ConnectionStringName(ModuleNameDbProperties.ConnectionStringName)]
public interface IModuleNameDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
