import React, { useState } from 'react';
import { studentSubmissions } from '../../mockData';

// --- MODULE 1: QUIZ GENERATOR ---
export const QuizGenerator = () => {
  const [topic, setTopic] = useState('');
  const [generatedQuiz, setGeneratedQuiz] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!topic) return;
    setIsGenerating(true);
    // Simulate AI delay
    setTimeout(() => {
      setGeneratedQuiz([
        { q: `What is the primary function of ${topic}?`, options: ["Option A", "Option B", "Option C"] },
        { q: `Explain the core concept of ${topic}.`, options: ["Option A", "Option B", "Option C"] },
        { q: `Which library is best for ${topic}?`, options: ["Option A", "Option B", "Option C"] },
      ]);
      setIsGenerating(false);
    }, 1500);
  };

  const handlePost = () => {
    alert(`Quiz on "${topic}" has been posted to the course! Students can now attempt it.`);
    setGeneratedQuiz(null);
    setTopic('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <span className="material-symbols-outlined">psychology</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">AI Quiz Generator</h2>
            <p className="text-sm text-gray-500">Generate quizzes instantly from any topic and post them to your students.</p>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g., Python Lists, React Hooks, Ancient Rome)..."
            className="flex-1 px-4 py-3 bg-gray-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !topic}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <span className="material-symbols-outlined animate-spin">refresh</span>
            ) : (
              <span className="material-symbols-outlined">auto_awesome</span>
            )}
            Generate
          </button>
        </div>
      </div>

      {generatedQuiz && (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm animation-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-gray-800 dark:text-white">Preview: {topic} Quiz</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">AI Generated</span>
          </div>
          
          <div className="space-y-4 mb-6">
            {generatedQuiz.map((q, idx) => (
              <div key={idx} className="p-4 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700">
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Q{idx + 1}: {q.q}</p>
                <div className="space-y-2">
                  {q.options.map((opt, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-slate-800">
            <button 
              onClick={() => setGeneratedQuiz(null)}
              className="px-4 py-2 text-gray-500 font-medium hover:bg-gray-100 rounded-lg transition-colors"
            >
              Discard
            </button>
            <button 
              onClick={handlePost}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg shadow-indigo-200 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">send</span>
              Post to Course
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- MODULE 2: AES GRADER ---
export const AESGrader = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [grading, setGrading] = useState(false);
  const [gradeResult, setGradeResult] = useState(null);

  const selectedSubmission = studentSubmissions.find(s => s.id === selectedId);

  const handleGrade = () => {
    setGrading(true);
    setTimeout(() => {
      setGradeResult({
        score: 92,
        feedback: "Excellent analysis of the ethical implications. The argument regarding data privacy is well-structured. Consider adding more concrete examples in the second paragraph.",
        grammar: "98/100",
        relevance: "High"
      });
      setGrading(false);
    }, 2000);
  };

  const reset = () => {
    setSelectedId(null);
    setGradeResult(null);
  };

  if (selectedId && selectedSubmission) {
    return (
      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)]">
        {/* Essay View */}
        <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-slate-800 overflow-y-auto shadow-sm">
          <button onClick={reset} className="mb-4 flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span> Back to list
          </button>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedSubmission.assignment}</h2>
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100 dark:border-slate-800">
            <img src={selectedSubmission.avatar} alt="" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-bold text-gray-800 dark:text-white">{selectedSubmission.studentName}</p>
              <p className="text-xs text-gray-500">{selectedSubmission.submittedAt}</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-slate-300 leading-relaxed">
            {selectedSubmission.content}
            <p className="mt-4">... [Full essay content truncated for preview] ...</p>
            <p className="mt-4">In conclusion, we must strive for equitable algorithms.</p>
          </div>
        </div>

        {/* Grading Panel */}
        <div className="w-full lg:w-96 flex flex-col gap-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-200 dark:border-slate-800 shadow-sm h-full">
            <div className="flex items-center gap-2 mb-6 text-purple-600">
              <span className="material-symbols-outlined">analytics</span>
              <h3 className="font-bold text-lg">AI Assessment</h3>
            </div>

            {!gradeResult ? (
              <div className="text-center py-10">
                <div className="p-4 bg-purple-50 rounded-full inline-block mb-4">
                  <span className="material-symbols-outlined text-4xl text-purple-400">fact_check</span>
                </div>
                <p className="text-gray-500 mb-6">Ready to analyze this submission using NLP algorithms.</p>
                <button 
                  onClick={handleGrade}
                  disabled={grading}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-200 flex justify-center items-center gap-2"
                >
                  {grading ? "Analyzing..." : "Grade with AI"}
                </button>
              </div>
            ) : (
              <div className="space-y-6 animation-fade-in">
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-sm text-green-600 font-bold uppercase tracking-wider mb-1">AI Score</p>
                  <p className="text-5xl font-black text-green-700">{gradeResult.score}<span className="text-2xl text-green-500">/100</span></p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Grammar</span>
                    <span className="font-bold text-gray-800">{gradeResult.grammar}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Relevance</span>
                    <span className="font-bold text-gray-800">{gradeResult.relevance}</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 mb-2 uppercase">AI Feedback</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{gradeResult.feedback}</p>
                </div>

                <button className="w-full py-3 border-2 border-purple-600 text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-colors">
                  Approve & Send
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // List View
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pending Submissions</h2>
      <div className="grid gap-4">
        {studentSubmissions.map((sub) => (
          <div 
            key={sub.id}
            onClick={() => setSelectedId(sub.id)}
            className="group bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-purple-300 transition-all cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img src={sub.avatar} alt="" className="w-12 h-12 rounded-full group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors">{sub.assignment}</h4>
                <p className="text-sm text-gray-500">{sub.studentName} • {sub.course}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 text-xs font-bold rounded-full ${sub.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                {sub.status}
              </span>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-purple-600">chevron_right</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};