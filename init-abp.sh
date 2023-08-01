dotnet tool install volo.abp.cli -g || dotnet tool update volo.abp.cli -g
abp new CompanyName.ProjectName -dbms PostgreSQL --tiered --theme basic -csf

mkdir CompanyName.ProjectName.ModuleName
cd CompanyName.ProjectName.ModuleName
abp new CompanyName.ProjectName.ModuleName -t module --no-ui

