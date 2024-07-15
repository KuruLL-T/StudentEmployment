namespace StudentEmployment.Models
{
    public class Student
    {
        public int StudentId { get; set; }
        public string Firstname { get; set; }
        public string? Maidenname { get; set; }
        public string Lastname { get; set; }
        public string? Middlename { get; set; }
        public DateTime Birthday { get; set; }
        public int FacultyTypeId { get; set; }
        public FacultyType? FacultyTypeName { get; set; }
        public int SpecialtyTypeId { get; set; }
        public SpecialtyType? SpecialtyTypeName { get; set; }
        public int Course { get; set; }
        public int Group { get; set; }
        public decimal GPA { get; set; }
        public int StatusId { get; set; }
        public Status? Status{ get; set; }
        public DateTime StartStudy { get; set; }
        public DateTime EndStudy { get; set; }
    }
}
