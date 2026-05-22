import { Dumbbell, Heart, Wind, Activity, Users, Flame } from "lucide-react";

export const SERVICES = [
  {
    id: "kickboxing",
    icon: Flame,
    title: "Kickboxing",
    desc: "High-intensity striking sessions to torch fat and build explosive power.",
    fullDesc: "Our kickboxing program combines traditional striking techniques with modern high-intensity interval training. Led by professional fighters, these sessions are designed to improve your cardiovascular health, coordination, and strength while teaching you valuable self-defense skills. Whether you're a beginner or looking to sharpen your technique, our coaches will guide you through a rigorous workout that challenges both mind and body.",
    benefits: ["Full-body workout", "Stress relief", "Improved agility", "Self-defense skills"],
    features: ["Expert striking coaches", "Heavy bag work", "Partner drills", "High-energy environment"]
  },
  {
    id: "weight-training",
    icon: Dumbbell,
    title: "Weight Training",
    desc: "Structured strength programs from foundational lifts to advanced hypertrophy.",
    fullDesc: "From heavy compounds to targeted isolation, our weight training program is the backbone of physical transformation. We provide the equipment and expertise to help you build functional strength, increase muscle mass, and improve bone density. Our trainers specialize in everything from powerlifting to bodybuilding techniques, ensuring your form is perfect and your progress is consistent.",
    benefits: ["Increased muscle mass", "Better bone density", "Boosted metabolism", "Functional strength"],
    features: ["Olympic lifting platforms", "Free weights area", "Progressive overload tracking", "Technique workshops"]
  },
  {
    id: "yoga-recovery",
    icon: Wind,
    title: "Yoga & Recovery",
    desc: "Mobility, breath, and active recovery to balance the grind.",
    fullDesc: "Balance your high-intensity training with focused mobility and recovery. Our yoga and recovery sessions are designed to improve flexibility, reduce the risk of injury, and promote mental clarity. We integrate breathwork, static stretching, and dynamic flow to help your body repair and your mind reset, ensuring you're ready for your next session.",
    benefits: ["Improved flexibility", "Faster recovery", "Mental focus", "Injury prevention"],
    features: ["Guided meditation", "Mobility drills", "Hot yoga options", "Recovery equipment access"]
  },
  {
    id: "cardio-blast",
    icon: Activity,
    title: "Cardio Blast",
    desc: "HIIT, rowing, sprints, engineered for VO2 max and endurance.",
    fullDesc: "Push your heart rate to the limit with our engineered cardio sessions. Using a mix of HIIT, rowing, and sprints, we focus on improving your VO2 max and metabolic conditioning. These sessions are fast-paced, challenging, and highly effective for fat loss and cardiovascular endurance, led by coaches who know how to keep you motivated until the final whistle.",
    benefits: ["Heart health", "Fat loss", "Endurance boost", "High caloric burn"],
    features: ["Modern cardio equipment", "Heart rate monitoring", "Interval timers", "Dynamic group atmosphere"]
  },
  {
    id: "personal-training",
    icon: Heart,
    title: "Personal Training",
    desc: "1-on-1 coaching tailored to your body, schedule, and goals.",
    fullDesc: "Experience ultimate accountability and personalized guidance with our 1-on-1 personal training. Your dedicated coach will design a comprehensive program tailored specifically to your goals, whether it's weight loss, muscle gain, or athletic performance. We provide constant feedback on form, nutrition advice, and the motivation you need to surpass your limits.",
    benefits: ["Personalized programming", "Expert form correction", "Goal accountability", "Nutritional guidance"],
    features: ["Private training sessions", "Monthly assessments", "Customized workout plans", "Direct coach communication"]
  },
  {
    id: "group-classes",
    icon: Users,
    title: "Group Classes",
    desc: "Train harder with the energy of a tribe pushing in unison.",
    fullDesc: "There's power in numbers. Our group classes are designed to foster community while delivering high-impact workouts. Led by energetic instructors, these classes range from circuit training to bootcamp styles, providing a social yet competitive environment that pushes everyone to do their best. Join the tribe and transform your fitness journey through collective effort.",
    benefits: ["Community motivation", "Social environment", "Structured variety", "Fun atmosphere"],
    features: ["Expert class instructors", "Varied daily workouts", "Team-based challenges", "All fitness levels welcome"]
  },
];
