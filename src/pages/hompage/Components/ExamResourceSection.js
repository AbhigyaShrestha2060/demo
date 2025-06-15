import { colors } from '../../../components/Theme/Theme';
export function ExamResourcesSection() {
  return (
    <section className={`py-16 ${colors.background.gradientExam}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className={`text-3xl font-bold ${colors.text.secondary} mb-4`}>
              Prepare with Essential Exam Resources
            </h2>
            <button
              className={`${colors.button.primary} ${colors.text.white} px-6 py-3 rounded-md transition-colors`}>
              View Routines ➔
            </button>
          </div>
          <div>
            <h3
              className={`text-xl font-semibold ${colors.text.secondary} mb-4`}>
              Exam Routines ↗
            </h3>
            <p className={colors.text.muted}>
              Stay informed with updated exam schedules for your upcoming tests
              and assessments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
