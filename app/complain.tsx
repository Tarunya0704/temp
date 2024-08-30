
"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
  } from "@/components/ui/select"
  

export default function ComplainForm({ onSubmit }) { // Add onSubmit prop
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [description, setDescription] = useState('') // State for description
  const commonProblems = [
    { id: 1, label: "Account Issue" },
    { id: 2, label: "Billing Problem" },
    { id: 3, label: "Technical Difficulty" },
    { id: 4, label: "Product Inquiry" },
    { id: 5, label: "Other" },
  ]
  

  const handleProblemSelect = (problem) => {
    setSelectedProblem(problem)
  }
  const handleSubmit = () => {
    if (selectedProblem && description) {
      onSubmit({ problem: selectedProblem, description }); // Call onSubmit with data
      setSelectedProblem(null);
      setDescription('');
    }
  }
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>How can we help you today?</CardTitle>
        <CardDescription>Please select the issue you're experiencing from the list below.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {commonProblems.map((problem) => (
            <Button
              key={problem.id}
              variant={selectedProblem?.id === problem.id ? "solid" : "outline"}
              onClick={() => handleProblemSelect(problem)}
              className="justify-start"
            >
              {problem.label}
            </Button>
          ))}
        </div>
        {selectedProblem && (
          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="description">Describe your issue:</Label>
              <Select id="issue">
              <SelectTrigger>
                <SelectValue placeholder="Select an issue" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="account">Account or login issues</SelectItem>
                  <SelectItem value="order">Order or shipping problems</SelectItem>
                  <SelectItem value="product">Product questions</SelectItem>
                  <SelectItem value="other">Other inquiries</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
              <Textarea
                id="description"
                placeholder="Please provide more details about the problem you're experiencing."
                className="min-h-[150px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setSelectedProblem(null)}>Cancel</Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
            
          </div>
        )}
      </CardContent>
    </Card>
    
  )
};
