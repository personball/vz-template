using CompanyName.ProjectName.ModuleName.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace CompanyName.ProjectName.ModuleName.Permissions;

public class ModuleNamePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ModuleNamePermissions.GroupName, L("Permission:ModuleName"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ModuleNameResource>(name);
    }
}
