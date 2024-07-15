using System.ComponentModel.DataAnnotations;

namespace StudentEmployment.Models
{
    public class Employer
    {
        public int EmployerId { get; set; }
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string ContactName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}
