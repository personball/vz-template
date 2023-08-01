using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace CompanyName.ProjectName.ModuleName;

[DependsOn(
    typeof(AbpVirtualFileSystemModule)
    )]
public class ModuleNameInstallerModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<ModuleNameInstallerModule>();
        });
    }
}
