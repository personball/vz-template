using System.Linq;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
namespace CompanyName.ProjectName.Swagger;
public class SwaggerTagsFilter: IDocumentFilter
{
    public void Apply(OpenApiDocument swaggerDoc, DocumentFilterContext context)
    {
        // Navigate the context to items in groups (Action Descriptions).
        // Find properties of type controller action description to track down
        // controller name.

        swaggerDoc.Tags = swaggerDoc.Paths.SelectMany(p => p.Value.Operations)
                            .SelectMany(o => o.Value.Tags)
                            .Select(t => t.Name)
                            .Where(g => !string.IsNullOrWhiteSpace(g))
                            .Select(name => new OpenApiTag { Name = name })
                            .ToList();
    }
}