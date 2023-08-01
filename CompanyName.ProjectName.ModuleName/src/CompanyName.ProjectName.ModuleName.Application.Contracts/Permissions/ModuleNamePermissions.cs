using Volo.Abp.Reflection;

namespace CompanyName.ProjectName.ModuleName.Permissions;

public class ModuleNamePermissions
{
    public const string GroupName = "ModuleName";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(ModuleNamePermissions));
    }
}
