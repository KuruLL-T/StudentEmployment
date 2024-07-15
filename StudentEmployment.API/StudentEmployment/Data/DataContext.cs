using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using StudentEmployment.Models;

namespace StudentEmployment.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Employer> Employers { get; set; }
        public DbSet<Vacancy> Vacancies { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Resume> Resumes { get; set; }
        public DbSet<Region> Regions { get; set; }

        public DbSet<City> Cities { get; set; }
        public DbSet<CategoryType> CategoryTypes { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<LangSkill> LangSkills { get; set; }
        public DbSet<PCSkill> PCSkills { get; set; }
        public DbSet<Status> Statuses { get; set; }
        public DbSet<FacultyType> FacultyTypes { get; set; }
        public DbSet<SpecialtyType> SpecialtyTypes { get; set; }
    }
}