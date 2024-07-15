namespace StudentEmployment.Models
{
    public class City
    {
        public int CityId { get; set; }
        public int RegionId { get; set; }
        public Region? Region { get; set; } 
        public string CityName { get; set; }
    }
}
