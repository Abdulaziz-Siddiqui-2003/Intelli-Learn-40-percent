import React, { useState } from 'react';

const QuizInterface = ({ quiz, onBack }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelect = (qId, option) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate network request to teacher
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-5xl">check_circle</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Quiz Sent!</h2>
        <p className="text-gray-500 dark:text-slate-400 mb-8 max-w-md">
          Your answers have been securely transmitted to <strong>Dr. Eleanor Vance</strong>. You will receive your grade once the AI assessment is complete.
        </p>
        <button 
          onClick={onBack}
          className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:opacity-90 transition-opacity"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 animate-slide-up">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined text-gray-500">arrow_back</span>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{quiz.title}</h1>
          <p className="text-sm text-gray-500">{quiz.course} • Due {quiz.due}</p>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6 mb-8">
        {quiz.questions && quiz.questions.map((q, index) => (
          <div key={q.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              <span className="text-gray-400 mr-2">{index + 1}.</span>
              {q.text}
            </h3>
            <div className="space-y-3">
              {q.options.map((option) => (
                <label 
                  key={option} 
                  className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    answers[q.id] === option 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 ring-1 ring-blue-500' 
                      : 'border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    answers[q.id] === option ? 'border-blue-500' : 'border-gray-300'
                  }`}>
                    {answers[q.id] === option && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
                  </div>
                  <input 
                    type="radio" 
                    name={`q-${q.id}`} 
                    value={option} 
                    className="hidden"
                    onChange={() => handleSelect(q.id, option)}
                  />
                  <span className="text-gray-700 dark:text-slate-300 font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Action */}
      <div className="sticky bottom-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg flex justify-between items-center">
        <span className="text-sm font-medium text-gray-500">
          {Object.keys(answers).length} of {quiz.questions?.length || 0} questions answered
        </span>
        <button 
          onClick={handleSubmit}
          disabled={isSubmitting || Object.keys(answers).length !== quiz.questions?.length}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200 dark:shadow-none"
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
              Sending...
            </>
          ) : (
            <>
              Send to Teacher
              <span className="material-symbols-outlined text-xl">send</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default QuizInterface;