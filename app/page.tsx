import Switch from "@/components/shared/Switch";

export default function Home() {
  return (
    <div className="min-h-screen text-text-primary-light dark:bg-gray-900 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Home
        </h1>
        <Switch />
      </div>
    </div>
  );
}
