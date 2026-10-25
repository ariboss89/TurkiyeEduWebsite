# Tahap Build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["TurkiyEdu.csproj", "./"]
RUN dotnet restore "TurkiyEdu.csproj"
COPY . .
RUN dotnet publish -c Release -o /app/publish

# Tahap Runtime
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 8080
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "TurkiyEdu.dll"]