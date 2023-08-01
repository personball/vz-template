using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace CompanyName.ProjectName.ModuleName.EntityFrameworkCore;

public class ModuleNameHttpApiHostMigrationsDbContext : AbpDbContext<ModuleNameHttpApiHostMigrationsDbContext>
{
    public ModuleNameHttpApiHostMigrationsDbContext(DbContextOptions<ModuleNameHttpApiHostMigrationsDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigureModuleName();
    }
}
