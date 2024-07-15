using System.ComponentModel.DataAnnotations;

namespace StudentEmployment.Models
{
    public class Vacancy
    {
        public int VacancyId { get; set; }
        public int EmployerId { get; set; }
        public Employer? Employer{ get; set; } 
        public string JobTitle { get; set; } 
        public int? CategoryTypeId { get; set; }
        public CategoryType? CategoryType { get; set; }
        public int RegionId { get; set; }
        public Region? Region { get; set; }
        public int CityId { get; set; }
        public City? City { get; set; }
        public int? ScheduleId { get; set; }
        public Schedule? Schedule { get; set; }
        public string? Experience { get; set; } 
        public decimal Salary { get; set; } 
        public string? OtherRequirements { get; set; } 
        public string ContactName { get; set; } 
        public DateTime? LastUpdate { get; set; }
        public bool VacancyStatus { get; set; }
    }
}