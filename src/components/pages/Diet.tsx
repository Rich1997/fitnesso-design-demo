import { Apple } from 'lucide-react';
import ActionBar from '../UI snippets/ActionBar';
import ListItem from '../UI snippets/ListItem';
import PaddedContainer from '../UI snippets/PaddedContainer';
import PaddedFlexContainer from '../UI snippets/PaddedFlexContainer';
import StatCard from '../UI snippets/StatCard';
import SubtitleBar from '../UI snippets/SubtitleBar';
import TitleBar from '../UI snippets/TitleBar';

const dietList = [
    {
        title: 'Grilled Chicken Breast',
        description: 'chicken, olive oil, herbs, spices',
        mainValue: '1.65',
        subValue: 'cal/g',
    },
    {
        title: 'Salmon Fillet',
        description: 'salmon, lemon, dill, butter',
        mainValue: '2.08',
        subValue: 'cal/g',
    },
    {
        title: 'Quinoa Salad',
        description: 'quinoa, cucumber, tomato, feta cheese',
        mainValue: '1.20',
        subValue: 'cal/g',
    },
    {
        title: 'Greek Yogurt',
        description: 'milk, probiotics, fruit, honey',
        mainValue: '0.59',
        subValue: 'cal/g',
    },
    {
        title: 'Avocado Toast',
        description: 'whole grain bread, avocado, olive oil, salt',
        mainValue: '2.54',
        subValue: 'cal/g',
    },
    {
        title: 'Banana',
        mainValue: '0.89',
        subValue: 'cal/g',
    },
    {
        title: 'Almonds',
        mainValue: '5.79',
        subValue: 'cal/g',
    },
    {
        title: 'Lentil Soup',
        description: 'lentils, carrots, onions, celery',
        mainValue: '0.48',
        subValue: 'cal/g',
    },
    {
        title: 'Spinach and Mushroom Omelette',
        description: 'eggs, spinach, mushrooms, cheese',
        mainValue: '1.67',
        subValue: 'cal/g',
    },
    {
        title: 'Apple',
        mainValue: '0.52',
        subValue: 'cal/g',
    },
];

const Diet = () => {
    const allDietTitles = dietList.map((diet) => diet.title);

    return (
        <>
            <TitleBar title="Diet" />
            <SubtitleBar subtitle="Today's diet" showDetailsButton={true} />
            <PaddedContainer>
                <StatCard
                    icon={Apple}
                    iconColor={'bg-red-300'}
                    value={'1250'}
                    label={'Calories consumed'}
                    variant="destructive"
                />
            </PaddedContainer>
            <PaddedContainer padding="4">
                <ActionBar allItems={allDietTitles} />
            </PaddedContainer>
            <PaddedFlexContainer>
                {dietList.map((diet) => (
                    <ListItem key={diet.title} {...diet} />
                ))}
            </PaddedFlexContainer>
        </>
    );
};

export default Diet;
