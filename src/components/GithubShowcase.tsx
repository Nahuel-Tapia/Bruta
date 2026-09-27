import React, { useState, useEffect } from 'react';
import { STUDIO_CONFIG, FEATURED_PROJECTS } from '../data/config';
import { Star, GitFork, ExternalLink, Code2, Terminal, RefreshCw, Filter } from 'lucide-react';
import { GithubIcon } from './Icons';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

export const GithubShowcase: React.FC = () => {
  const [username, setUsername] = useState<string>(STUDIO_CONFIG.githubUsername);
  const [inputUser, setInputUser] = useState<string>(STUDIO_CONFIG.githubUsername);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [apiError, setApiError] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'curated' | 'live'>('curated');
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Fetch GitHub repos
  const fetchGitHubRepos = async (userToFetch: string) => {
    setLoading(true);
    setApiError(false);
    try {
      const res = await fetch(`https://api.github.com/users/${userToFetch}/repos?sort=updated&per_page=8`);
      if (!res.ok) {
        throw new Error('User not found or rate limited');
      }
      const data: GitHubRepo[] = await res.json();
      setRepos(data);
    } catch (err) {
      console.warn('GitHub API fetch fallback:', err);
      setApiError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubRepos(username);
  }, [username]);

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUser.trim()) {
      setUsername(inputUser.trim());
      setActiveTab('live');
    }
  };

  const filteredCurated = filterCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === filterCategory);

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case 'typescript': return '#3178C6';
      case 'javascript': return '#F7DF1E';
      case 'html': return '#E34F26';
      case 'css': return '#1572B6';
      case 'python': return '#3776AB';
      default: return '#C6FF00';
    }
  };

  return (
    <section id="github" className="py-24 bg-[#0C0D0E] relative border-b border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#C6FF00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15161A] border border-white/10 text-xs font-mono text-[#A1A1AA] mb-3">
              <GithubIcon className="w-3.5 h-3.5 text-[#C6FF00]" />
              <span className="text-[#C6FF00] font-bold">08 / 09</span>
              <span>•</span>
              <span>OPEN SOURCE & REPOSITORIOS EN VIVO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              CÓDIGO TRANSPARENTE. <br />
              <span className="text-[#C6FF00]">SIN SECRETOS.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A1A1AA]">
            A diferencia de otras agencias que ocultan cómo trabajan, <strong className="text-white">nosotros mostramos cada línea de código</strong>. Arquitectura limpia, TypeScript riguroso y buenas prácticas verificables en GitHub.
          </p>
        </div>

        {/* Live Terminal & Interactive Bar */}
        <div className="rounded-2xl bg-[#15161A] border border-white/10 p-5 mb-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
            
            {/* Terminal Status */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-black border border-white/10 text-[#C6FF00]">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="font-mono text-xs">
                <span className="text-[#777777]">$ git status: </span>
                <span className="text-[#C6FF00]">branch 'main' • 0 vulnerabilities</span>
                <span className="text-[#777777] ml-2 hidden sm:inline">| User: @{username}</span>
              </div>
            </div>

            {/* Interactive User Switcher Form */}
            <form onSubmit={handleUserSubmit} className="flex items-center gap-2">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#777777]">@</span>
                <input
                  type="text"
                  value={inputUser}
                  onChange={(e) => setInputUser(e.target.value)}
                  placeholder="Tu usuario de GitHub..."
                  className="pl-7 pr-3 py-1.5 rounded-lg bg-[#0C0D0E] border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#C6FF00] transition-colors w-44 sm:w-56"
                />
              </div>
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-[#C6FF00] text-black font-semibold text-xs font-mono hover:bg-[#d8ff33] transition-colors flex items-center gap-1.5"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Cargar Git</span>
              </button>
            </form>

          </div>

          {/* Tab Selector & Stats Counter */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            
            {/* View Mode Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('curated')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeTab === 'curated'
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-[#0C0D0E] text-[#A1A1AA] hover:text-white border border-white/10'
                }`}
              >
                ★ Proyectos Destacados ({FEATURED_PROJECTS.length})
              </button>
              <button
                onClick={() => setActiveTab('live')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'live'
                    ? 'bg-[#C6FF00] text-black font-bold shadow-md'
                    : 'bg-[#0C0D0E] text-[#A1A1AA] hover:text-white border border-white/10'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse"></span>
                <span>GitHub API en Vivo (@{username})</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 text-xs font-mono text-[#777777]">
              <span>STACK: REACT + TS + TAILWIND</span>
              <span>•</span>
              <span className="text-[#C6FF00]">UPTIME 99.9%</span>
            </div>

          </div>
        </div>

        {/* CURATED SHOWCASE TAB */}
        {activeTab === 'curated' && (
          <div>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-mono text-[#777777] mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> FILTRAR:
              </span>
              {['All', 'Landing', 'Business', 'E-commerce', 'Web App'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                    filterCategory === cat
                      ? 'bg-[#C6FF00] text-black font-bold'
                      : 'bg-[#15161A] text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  {cat === 'All' ? 'TODOS' : cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Curated Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCurated.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#15161A] border border-white/10 overflow-hidden hover:border-[#C6FF00]/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Image & Overlay */}
                  <div className="relative h-52 overflow-hidden bg-zinc-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15161A] via-transparent to-black/30" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#0C0D0E]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#C6FF00]">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-white">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      <span>{project.stars}</span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-[#C6FF00]">
                      ⚡ {project.metrics}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-2xl text-white uppercase tracking-tight mb-2 group-hover:text-[#C6FF00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#A1A1AA] mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-[#0C0D0E] border border-white/5 text-[11px] font-mono text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 text-[#C6FF00]" />
                        <span>Ver Código</span>
                      </a>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tactile-btn flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C6FF00] text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#d8ff33]"
                      >
                        <span>Demo en Vivo</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LIVE GITHUB API TAB */}
        {activeTab === 'live' && (
          <div>
            {loading ? (
              /* Shimmer Skeletons */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-44 rounded-xl bg-[#15161A] border border-white/10 p-5 animate-pulse flex flex-col justify-between">
                    <div>
                      <div className="h-5 bg-white/10 rounded w-2/3 mb-3" />
                      <div className="h-3 bg-white/5 rounded w-full mb-2" />
                      <div className="h-3 bg-white/5 rounded w-4/5" />
                    </div>
                    <div className="h-4 bg-white/10 rounded w-1/3" />
                  </div>
                ))}
              </div>
            ) : apiError || repos.length === 0 ? (
              /* Fallback message */
              <div className="rounded-xl bg-[#15161A] border border-white/10 p-8 text-center max-w-xl mx-auto">
                <Code2 className="w-10 h-10 text-[#C6FF00] mx-auto mb-3" />
                <h4 className="font-display text-xl text-white uppercase mb-2">
                  Repositorios Públicos de @{username}
                </h4>
                <p className="text-sm text-[#A1A1AA] mb-4">
                  El perfil está configurado correctamente. Si aún no tienes repos públicos con esta cuenta o alcanzaste el límite de la API pública de GitHub, puedes explorar nuestros proyectos modelo o revisar tu usuario.
                </p>
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C6FF00] text-black font-bold text-xs uppercase"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Ver Perfil Directo en GitHub.com →</span>
                </a>
              </div>
            ) : (
              /* Live Repos Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {repos.map((repo) => (
                  <div
                    key={repo.id}
                    className="p-5 rounded-xl bg-[#15161A] border border-white/10 hover:border-[#C6FF00]/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 truncate">
                          <Code2 className="w-4 h-4 text-[#C6FF00] shrink-0" />
                          <h4 className="font-mono font-bold text-sm text-white group-hover:text-[#C6FF00] transition-colors truncate">
                            {repo.name}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black text-[#A1A1AA] border border-white/5">
                          Public
                        </span>
                      </div>

                      <p className="text-xs text-[#A1A1AA] line-clamp-2 mb-4">
                        {repo.description || 'Repositorio de desarrollo web y arquitectura de software.'}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-[#777777] mb-4 pt-3 border-t border-white/5">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                          />
                          <span>{repo.language || 'Code'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-zinc-400">
                            <Star className="w-3.5 h-3.5 text-yellow-500" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1 text-zinc-400">
                            <GitFork className="w-3.5 h-3.5" />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 rounded bg-[#0C0D0E] border border-white/10 text-xs font-mono text-white hover:border-[#C6FF00] transition-colors"
                        >
                          Ver Repo ↗
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 rounded bg-[#C6FF00] text-black text-xs font-mono font-bold hover:bg-[#d8ff33] transition-colors"
                            title="Demo en vivo"
                          >
                            Demo ⚡
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
