// import StatCard from "../UI snippets/StatCard";
// import { Flame } from "lucide-react";
import ListItem from "../UI snippets/ListItem";
import TitleBar from "../UI snippets/TitleBar";
import SubtitleBar from "../UI snippets/SubtitleBar";
import ActionBar from "../UI snippets/ActionBar";
import PaddedFlexContainer from "../UI snippets/PaddedFlexContainer";
import PaddedContainer from "../UI snippets/PaddedContainer";
import FAB from ".././FAB";

const exercisesList = [
    {
        title: "Bicep Curls",
        description: "biceps, forearms",
        mainValue: "12",
        subValue: "x3",
    },
    { title: "Squat", description: "quadriceps, hamstrings, glutes, core" },
    { title: "Deadlift", description: "back, glutes, hamstrings, traps" },
    { title: "Bench Press", description: "chest, triceps, shoulders" },
    { title: "French Press" },
    { title: "Pull-ups", description: "back, biceps, shoulders" },
];

const Exercises = () => {
    const allExerciseTitles = exercisesList.map((exercise) => exercise.title);

    return (
        <>
            <TitleBar title="Exercises" />
            <SubtitleBar subtitle="Today's activity" showDetailsButton={true} />
            <PaddedContainer padding="6">
                <ActionBar allItems={allExerciseTitles} />
            </PaddedContainer>
            <PaddedFlexContainer>
                {/* <StatCard
                    icon={Flame}
                    iconColor={'bg-green-300'}
                    value={'1250'}
                    label={'Calories'}
                /> */}
                {exercisesList.map((exercise) => (
                    <ListItem key={exercise.title} {...exercise} />
                ))}
            </PaddedFlexContainer>
            <FAB />
        </>
    );
};

export default Exercises;
