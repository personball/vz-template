using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace CompanyName.ProjectName.ModuleName.EntityFrameworkCore;

[ConnectionStringName(ModuleNameDbProperties.ConnectionStringName)]
public class ModuleNameDbContext : AbpDbContext<ModuleNameDbContext>, IModuleNameDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * public DbSet<Question> Questions { get; set; }
     */

    public ModuleNameDbContext(DbContextOptions<ModuleNameDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureModuleName();
    }
}
