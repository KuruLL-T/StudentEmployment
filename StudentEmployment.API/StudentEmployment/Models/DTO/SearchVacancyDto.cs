namespace StudentEmployment.Models.DTO
{
    public class SearchVacancyDto
    {
        public int CategoryTypeId { get; set; }
        //public string JobTitle { get; set; }
        public int ScheduleId { get; set; }
        public decimal Salary { get; set; }
        public int RegionId { get; set; }
        public int CityId { get; set; }
        
    }
}
