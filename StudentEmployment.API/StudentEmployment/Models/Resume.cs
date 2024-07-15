namespace StudentEmployment.Models
{
    public class Resume
    {
        public int ResumeId { get; set; }
        public int StudentId { get; set; }
        public Student? Student { get; set; }
        public int LanguageId { get; set; }
        public Language? Language { get; set; }
        public int LangSkillId { get; set; }
        public LangSkill? LangSkill { get; set; }
        public int PCSkillId { get; set; }
        public PCSkill? PCSkill { get; set; }
        public string Experience { get; set; }
        public int RegionId { get; set; }
        public Region? Region { get; set; }
        public City? City { get; set; }
        public decimal DesiredSalary { get; set; }
        public string OtherInf { get; set; }
        public string Contact { get; set; }
        public bool ResumeStatus { get; set;}
        public DateTime PlacementTime { get; set; }
    }
}
