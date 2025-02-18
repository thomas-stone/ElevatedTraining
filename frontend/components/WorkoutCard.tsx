import { TrainingDayType } from "@/types/TrainingPlanTypes"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type WorkoutCardProps = {
    workout: TrainingDayType,
    color: string
}

const WorkoutCard = ({workout, color} : WorkoutCardProps ) => {
    let workoutDescription = formatWorkout(workout.DESCRIPTION)

  return (
    <Card className={`h-50 m-5 border border-green-500 ${color}`}>
      <CardHeader>
        <CardTitle>{workout.CODE}</CardTitle>
        {workoutDescription.split("\n").map((line, i) => (
          <CardDescription key={i} className="m-[-2]">
            {line}
          </CardDescription>
        ))}
      </CardHeader>
    </Card>
  );
}

export default WorkoutCard

// AI Magic function to format the description
function formatWorkout(input : string) {
    // Handle empty input
    if (!input || input.trim() === '') {
        return '';
    }

    // First, let's protect the parenthetical content - handle both 'x' and '×'
    let protectedStrings : string[] = [];
    let tempInput = input.replace(/\d+\s*[x×]\s*\([^)]+\)/g, match => {
        // Standardize to 'x' in the output
        let standardized = match.replace('×', 'x');
        protectedStrings.push(standardized);
        return `__PROTECTED${protectedStrings.length - 1}__`;
    });

    // Helper function to restore protected strings
    const restoreProtectedStrings = (text : string) => {
        let result = text;
        protectedStrings.forEach((str, index) => {
            result = result.replace(`__PROTECTED${index}__`, str);
        });
        return result;
    };

    // If the input contains semicolons, split on those first
    if (tempInput.includes(';')) {
        let segments = tempInput.split(';')
            .map(segment => segment.trim())
            .map(segment => restoreProtectedStrings(segment));
        return segments.join('\n');
    }

    // If the input contains commas (after protecting parenthetical content), split on those
    if (tempInput.includes(',')) {
        let result = tempInput.split(',')
            .map(segment => segment.trim())
            .map(segment => restoreProtectedStrings(segment));
        return result.join('\n');
    }

    // Split the string on multiple spaces or single spaces
    let parts = tempInput.split(/\s+/);
    
    let result = [];
    let currentSegment = [];
    
    for (let i = 0; i < parts.length; i++) {
        currentSegment.push(parts[i]);
        
        // Check if this part contains a zone indicator or rest specification
        // But only if it's not part of a protected string
        if (
            !parts[i].startsWith('__PROTECTED') && (
                parts[i].includes('Z') || 
                parts[i].includes('rest') ||
                parts[i].includes('\"')
            )
        ) {
            // Join the current segment and add it to results
            result.push(currentSegment.join(' '));
            currentSegment = [];
        } else if (parts[i].startsWith('__PROTECTED')) {
            // For protected strings, add them as their own segment
            result.push(currentSegment.join(' '));
            currentSegment = [];
        }
    }
    
    // Add any remaining segments
    if (currentSegment.length > 0) {
        result.push(currentSegment.join(' '));
    }
    
    // Restore protected strings and clean up
    let finalResult = result
        .map(line => restoreProtectedStrings(line))
        .filter(line => line.trim() !== '') // Remove empty lines
        .join('\n')
        .trim();
    
    return finalResult;
}