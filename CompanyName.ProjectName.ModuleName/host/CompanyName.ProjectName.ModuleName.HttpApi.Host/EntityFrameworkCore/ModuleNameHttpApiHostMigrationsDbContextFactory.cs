using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace CompanyName.ProjectName.ModuleName.EntityFrameworkCore;

public class ModuleNameHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<ModuleNameHttpApiHostMigrationsDbContext>
{
    public ModuleNameHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
    {
        // https://www.npgsql.org/efcore/release-notes/6.0.html#opting-out-of-the-new-timestamp-mapping-logic
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<ModuleNameHttpApiHostMigrationsDbContext>()
            .UseNpgsql(configuration.GetConnectionString("ModuleName"));

        return new ModuleNameHttpApiHostMigrationsDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
