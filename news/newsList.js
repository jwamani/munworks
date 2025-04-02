let newslist = [
    {
        name: "Budo Students Excel in National Debate Competition",
        description: "King's College Budo emerged as runners-up in the 2024 Uganda Schools Debate Championship held in Kampala. The team, led by Head Prefect Nalwanga, impressed judges with their arguments on climate change mitigation strategies.",
        image: "../assignment/Images/classroom.jpeg",
        category: "academic"
    },
    {
        name: "Budo Celebrates 115th Anniversary with Cultural Festival",
        description: "The college marked its founding anniversary with a vibrant cultural festival featuring traditional dances, art exhibitions, and a historical reenactment of its 1906 establishment.",
        image: "../assignment/Images/mdd-traditionaldance.jpg",
        category: "culture"
    },
    {
        name: "New STEM Lab Opens with Modern Equipment",
        description: "A state-of-the-art science and technology lab was inaugurated last week, equipped with advanced microscopes, robotics kits, and virtual reality tools for enhanced practical learning.",
        image: "../assignment/Images/project.jpeg",
        category: "academic"
    },
    {
        name: "Budo Alumni Association Launches Mentorship Program",
        description: "The Old Budonians Society has introduced a career guidance initiative pairing current students with professionals in fields like medicine, engineering, and entrepreneurship.",
        image: "../assignment/Images/career1.jpeg",
    },
    {
        name: "School Wins Regional Football Tournament",
        description: "The Budo Lions secured the championship title in the Central Region Schools Football League, defeating their rivals 3-1 in an intense final match.",
        image: "../assignment/Images/football.jpeg",
        category: "sports"
    },
    {
        name: "Budo Hosts Inter-School Science Fair",
        description: "Students showcased innovative projects including solar-powered irrigation systems and AI-driven waste management prototypes during the annual science exhibition.",
        image: "../assignment/Images/science fair.jpeg",
        category: "academic"
    },
    {
        name: "New Library Wing Dedicated to Founders",
        description: "A modern library extension was unveiled in honor of the college's founders, featuring digital archives and collaborative study spaces.",
        image: "../assignment/Images/new class block.jpg",
        category: "events"
    },
    {
        name: "Budo Choir Wins National Music Competition",
        description: "The school choir took top honors at the Uganda Schools Music Festival with their rendition of traditional folk songs and contemporary arrangements.",
        image: "../assignment/Images/chapel choir.jpg",
        category: "culture"
    },
    {
        name: "Budo Launches Community Outreach Program",
        description: "Students initiated a literacy drive in nearby villages, distributing educational materials and conducting reading workshops for local children.",
        image: "../assignment/Images/smart kidos.jpeg",
    },
    {
        name: "Budo Celebrates Founder's Day with Historical Play",
        description: "A theatrical production depicting the college's history from 1906 to present was staged during Founder's Day celebrations.",
        image: "../assignment/Images/mdd-skit.jpg",
    },
    {
        name: "Budo Warns Parents Against Admission Scams",
        description: "The school administration issued a public notice urging parents to disregard fraudulent messages circulating on social media claiming guaranteed S1 placements for a fee. Authorities emphasized that admissions remain strictly merit-based and free, with selections published through official channels only. Parents were advised to report suspicious communications to the school office immediately[1].",
        image: "../assignment/Images/admin_block.jpg",
    },
    {
        name: "Namirembe Diocese Investigates Allegations",
        description: "The Anglican Diocese of Namirembe initiated a formal inquiry into allegations of misconduct involving staff and students at the college. While details remain confidential, diocesan officials confirmed the investigation aims to uphold institutional values and ensure compliance with Uganda's education policies. No disciplinary actions have been announced pending conclusive findings[2].",
        image: "../assignment/Images/budo-chapel.jpg",
    },
    {
        name: "Renovation of Grace House Complete",
        description: "Extensive renovations of Grace House have been completed, with improved facilities and safety measures implemented. The renovated dormitory now features modern amenities and enhanced security systems to ensure student comfort and safety.",
        image: "../assignment/Images/grace house.jpeg",
    },
    {
        name: "Top Performers Recognized at Merit Ceremony",
        description: "Outstanding students were celebrated at the Order of Merit ceremony, recognizing exceptional academic achievement across all forms. The event highlighted Budo's continued commitment to academic excellence.",
        image: "../assignment/Images/order of merit.jpeg",
    },
    {
        name: "Golf Team Wins National Championship",
        description: "Budo's golf team dominated the 2024 Uganda Inter-Schools Golf Championship, securing their third title in five years. Led by captain Samuel Kaggwa, the team showcased exceptional skill at the Entebbe Golf Club, with individual players also winning medals in age-group categories.",
        image: "../assignment/Images/golf trophy.jpeg",
        category: "sports"
    },
    {
        name: "Staff Development Workshop",
        description: "Teachers attended a three-day workshop to discuss curriculum modernization strategies. Sessions covered integrating technology into lesson plans, improving student assessment methods, and fostering critical thinking skills.",
        image: "../assignment/Images/staff-workshop.jpg",
    },
    {
        name: "MDD Competition Showcases Talent",
        description: "The 2025 interhouse Music, Dance, and Drama (MDD) competition featured vibrant performances across all houses. Students showcased traditional dances and contemporary routines, while choir groups performed harmonized renditions of Ugandan folk songs.",
        image: "../assignment/Images/mdd-contemporarydance.jpg",
        category: "culture"
    },
    {
        name: "Staff Excellence Recognition",
        description: "Long-serving staff members were honored at a special ceremony recognizing their dedication and contributions to the school's success. The event celebrated their commitment to educational excellence.",
        image: "../assignment/Images/staff7.jpg",
    },
    {
        name: "Christmas Celebration",
        description: "The 2024 Christmas Sunday event began with a morning service led by the school chaplain, followed by carol singing and a festive meal. Students from each house presented gifts to staff members.",
        image: "../assignment/Images/christmas-lunch.jpg",
    },
    {
        name: "Annual Prize-Giving Day",
        description: "The annual prize-giving ceremony recognized outstanding achievements in academics, sports, and leadership. Awards were presented to top performers across all forms, celebrating student excellence.",
        image: "../assignment/Images/award dinner.jpeg",
    },
];

const events = [
    {
        date: '2025-03-30',
        event: 'Eid El-Fitr'
    },
    {
        date: '2025-04-05',
        event: "F5's Parents' Meeting"
    },
    {
        date: '2025-04-15',
        event: 'Inter-House Sports Day'
    },
    {
        date: '2025-04-22',
        event: 'Earth Day Celebration'
    },
    {
        date: '2025-05-01',
        event: 'Labor Day Holiday'
    },
    {
        date: '2025-05-10',
        event: 'School Open Day'
    },
    {
        date: '2025-05-20',
        event: 'End of Term Exams Begin'
    },
    {
        date: '2025-06-03',
        event: 'Martyrs Day'
    },
    {
        date: '2025-06-15',
        event: 'School Music Festival'
    },
    {
        date: '2025-07-01',
        event: 'Career Guidance Day'
    },
    {
        date: '2025-07-15',
        event: 'Science & Technology Fair'
    },
    {
        date: '2025-08-01',
        event: 'Founders Day Celebration'
    },
    {
        date: '2025-08-15',
        event: 'S6 Mock Exams Begin'
    },
    {
        date: '2025-08-20',
        event: 'Inter-School Debate Competition'
    },
    {
        date: '2025-09-01',
        event: 'Third Term Begins'
    },
    {
        date: '2025-09-10',
        event: 'Prefects Election Day'
    },
    {
        date: '2025-09-15',
        event: 'Inter-House Quiz Competition'
    },
    {
        date: '2025-09-25',
        event: 'S4 Parents Consultation Day'
    },
    {
        date: '2025-10-05',
        event: 'World Teachers Day Celebration'
    },
    {
        date: '2025-10-15',
        event: 'UNEB Registration Deadline'
    },
    {
        date: '2025-10-20',
        event: 'Inter-House Football Finals'
    },
    {
        date: '2025-11-01',
        event: 'S6 Farewell Dinner'
    },
    {
        date: '2025-11-15',
        event: 'UNEB Exams Begin'
    },
    {
        date: '2025-11-25',
        event: 'End of Year Art Exhibition'
    },
    {
        date: '2025-12-01',
        event: 'Prize Giving Day'
    },
    {
        date: '2025-12-10',
        event: 'Christmas Carol Service'
    }
];
