import { useState } from "react";
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Fade,
  Zoom,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  CheckCircle,
  Build,
  ElectricBolt,
  Plumbing,
  FormatPaint,
  CleaningServices,
  Construction,
  LocalShipping,
  Engineering,
} from "@mui/icons-material";
import { registerUser } from "../../_services/auth.service";

/* ========================================
   CONSTANTS & DATA
======================================== */

const AVAILABLE_SKILLS = [
  { id: "plumber", label: "Plumber", icon: <Plumbing />, color: "#3B82F6" },
  { id: "electrician", label: "Electrician", icon: <ElectricBolt />, color: "#FBBF24" },
  { id: "carpenter", label: "Carpenter", icon: <Build />, color: "#8B5CF6" },
  { id: "painter", label: "Painter", icon: <FormatPaint />, color: "#EC4899" },
  { id: "cleaner", label: "Cleaner", icon: <CleaningServices />, color: "#10B981" },
  { id: "mason", label: "Mason", icon: <Construction />, color: "#F97316" },
  { id: "driver", label: "Driver", icon: <LocalShipping />, color: "#06B6D4" },
  { id: "welder", label: "Welder", icon: <Engineering />, color: "#EF4444" },
];

/* ========================================
   MAIN COMPONENT
======================================== */

export default function Register() {
  const navigate = useNavigate();
  
  /* ========================================
     STATE MANAGEMENT
  ======================================== */
  
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    role:"",
    location: "",
    skills: [],
    experience: "",
    hourlyRate: "",
    bio: "",
  });
  const [errors, setErrors] = useState({});

  /* ========================================
     EVENT HANDLERS
  ======================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSkillToggle = (skillId) => {
    const skills = formData.skills.includes(skillId)
      ? formData.skills.filter((s) => s !== skillId)
      : [...formData.skills, skillId];
    setFormData({ ...formData, skills });
  };

  /* ========================================
     VALIDATION LOGIC
  ======================================== */

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (formData.phone.length < 10) newErrors.phone = "Invalid phone number";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Minimum 6 characters";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    if (formData.skills.length > 0) {
      const newErrors = {};
      if (!formData.experience) newErrors.experience = "Experience is required";
      if (!formData.hourlyRate) newErrors.hourlyRate = "Hourly rate is required";
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
    return true;
  };


  const handleContinue = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep2()) return;

    const userData={
      name:formData.name,
      email:formData.email,
      phone:formData.phone,
      password:formData.password,
      role:formData.skills.length > 0 ? "WORKER" : "CUSTOMER",
    };

    try{
      await registerUser(userData);
      alert("Registration successful!");
      navigate("/login")

    }catch(error){
      alert(error.message || "Registration failed")

    }
  };

  /* ========================================
     RENDER
  ======================================== */

  return (
    <Box 
      sx={{ 
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #FF6B35 0%, #e85d2a 50%, #FF8553 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, sm: 3 },
      }}
    >
      
      {/* Large floating circles */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          animation: "float 8s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: { xs: 250, md: 400 },
          height: { xs: 250, md: 400 },
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.1)",
          animation: "float 10s ease-in-out infinite",
          animationDelay: "1s",
          zIndex: 0,
        }}
      />
      
      {/* Medium floating circles */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: { xs: 120, md: 220 },
          height: { xs: 120, md: 220 },
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.08)",
          animation: "float 7s ease-in-out infinite",
          animationDelay: "2s",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "25%",
          right: "15%",
          width: { xs: 150, md: 250 },
          height: { xs: 150, md: 250 },
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.08)",
          animation: "float 9s ease-in-out infinite",
          animationDelay: "3s",
          zIndex: 0,
        }}
      />

      {/* Small decorative dots with pulse */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "25%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.15)",
          animation: "pulse 3s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      {/* <Box
        sx={{
          position: "absolute",
          bottom: "40%",
          left: "20%",
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.15)",
          animation: "pulse 4s ease-in-out infinite",
          animationDelay: "1s",
          zIndex: 0,
        }}
      /> */}
      {/* <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "10%",
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.12)",
          animation: "pulse 3.5s ease-in-out infinite",
          animationDelay: "2s",
          zIndex: 0,
        }}
      /> */}

      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 50% 50%, rgba(255,133,83,0.3) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* ========================================
          CENTERED REGISTRATION FORM
      ======================================== */}
      
      <Fade in timeout={600}>
        <Paper
          elevation={24}
          sx={{
            width: "100%",
            maxWidth: 480,
            p: { xs: 4, sm: 5 },
            borderRadius: 5,
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            position: "relative",
            zIndex: 1,
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Stack spacing={3}>

            {/* ========================================
                HEADER SECTION
            ======================================== */}
            
            <Box sx={{ textAlign: "center", mb: 2 }}>
              {/* Logo */}
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #FF6B35, #e85d2a)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 35,
                  mb: 2,
                  boxShadow: "0 4px 20px rgba(255, 107, 53, 0.3)",
                }}
              >
                🔨
              </Box>
              
              <Typography variant="h4" fontWeight={800} gutterBottom sx={{ color: "#1A1A1A" }}>
                Join Rozgaar
              </Typography>
              <Typography variant="body2" sx={{ color: "#6B7280" }}>
                Connect with skilled workers or offer your services
              </Typography>
            </Box>

            {/* ========================================
                PROGRESS STEPPER
            ======================================== */}
            
            <Box sx={{ display: "flex", gap: 1.5, mb: 2, justifyContent: "center" }}>
              <Chip
                label="1. Basic Info"
                size="medium"
                sx={{
                  backgroundColor: step === 1 ? "#FF6B35" : "#f3f4f6",
                  color: step === 1 ? "white" : "#6B7280",
                  fontWeight: 600,
                  px: 1,
                  transition: "all 0.3s",
                  boxShadow: step === 1 ? "0 4px 12px rgba(255, 107, 53, 0.3)" : "none",
                }}
              />
              <Chip
                label="2. Skills (optional)"
                size="medium"
                sx={{
                  backgroundColor: step === 2 ? "#FF6B35" : "#f3f4f6",
                  color: step === 2 ? "white" : "#6B7280",
                  fontWeight: 600,
                  px: 1,
                  transition: "all 0.3s",
                  boxShadow: step === 2 ? "0 4px 12px rgba(255, 107, 53, 0.3)" : "none",
                }}
              />
            </Box>

            {/* ========================================
                REGISTRATION FORM
            ======================================== */}
            
            <form onSubmit={handleSubmit}>
              <Stack spacing={2.5}>

                {/* ========================================
                    STEP 1: BASIC INFORMATION
                ======================================== */}
                
                {step === 1 && (
                  <Fade in timeout={400}>
                    <Stack spacing={2.5}>
                      
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        placeholder="Enter your full name"
                        autoFocus
                      />

                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        placeholder="+91 98765 43210"
                        type="tel"
                      />

                      <TextField
                        fullWidth
                        label="Email (Optional)"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        type="email"
                      />

                      <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        placeholder="Minimum 6 characters"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        error={!!errors.location}
                        helperText={errors.location}
                        placeholder="City, State"
                      />

                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={handleContinue}
                        sx={{ 
                          mt: 2, 
                          py: 1.5,
                          background: "linear-gradient(135deg, #FF6B35, #e85d2a)",
                          boxShadow: "0 4px 15px rgba(255, 107, 53, 0.4)",
                          "&:hover": {
                            background: "linear-gradient(135deg, #e85d2a, #d94d1f)",
                            boxShadow: "0 6px 20px rgba(255, 107, 53, 0.5)",
                          },
                        }}
                      >
                        Continue →
                      </Button>
                      
                    </Stack>
                  </Fade>
                )}

                {/* ========================================
                    STEP 2: SKILLS SELECTION
                ======================================== */}
                
                {step === 2 && (
                  <Fade in timeout={400}>
                    <Stack spacing={2.5}>
                      
                      <Typography variant="h6" fontWeight={600}>
                        Add Your Skills (Optional)
                      </Typography>
                      
                      <Alert severity="info" icon={false}>
                        💡 Select skills to receive work requests
                      </Alert>

                      {/* Skills Grid */}
                      <Grid container spacing={1.5}>
                        {AVAILABLE_SKILLS.map((skill) => (
                          <Grid item xs={6} sm={4} key={skill.id}>
                            <Zoom in timeout={300}>
                              <Card
                                onClick={() => handleSkillToggle(skill.id)}
                                sx={{
                                  cursor: "pointer",
                                  border: 2,
                                  borderColor: formData.skills.includes(skill.id)
                                    ? skill.color
                                    : "transparent",
                                  bgcolor: formData.skills.includes(skill.id)
                                    ? `${skill.color}10`
                                    : "white",
                                  transition: "all 0.2s",
                                  position: "relative",
                                  "&:hover": {
                                    transform: "translateY(-4px)",
                                    boxShadow: 3,
                                  },
                                }}
                              >
                                <CardContent sx={{ textAlign: "center", py: 2, px: 1 }}>
                                  <Box sx={{ color: skill.color, fontSize: 32, mb: 0.5 }}>
                                    {skill.icon}
                                  </Box>
                                  <Typography variant="body2" fontWeight={600}>
                                    {skill.label}
                                  </Typography>
                                  {formData.skills.includes(skill.id) && (
                                    <CheckCircle
                                      sx={{
                                        position: "absolute",
                                        top: 8,
                                        right: 8,
                                        fontSize: 20,
                                        color: skill.color,
                                      }}
                                    />
                                  )}
                                </CardContent>
                              </Card>
                            </Zoom>
                          </Grid>
                        ))}
                      </Grid>

                      {/* Selected Skills */}
                      {formData.skills.length > 0 && (
                        <Box>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            Selected Skills:
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {formData.skills.map((skillId) => {
                              const skill = AVAILABLE_SKILLS.find((s) => s.id === skillId);
                              return (
                                <Chip
                                  key={skillId}
                                  label={skill.label}
                                  onDelete={() => handleSkillToggle(skillId)}
                                  sx={{
                                    bgcolor: `${skill.color}20`,
                                    color: skill.color,
                                    fontWeight: 600,
                                  }}
                                />
                              );
                            })}
                          </Stack>
                        </Box>
                      )}

                      {/* Worker Details (Conditional) */}
                      {formData.skills.length > 0 && (
                        <Fade in timeout={400}>
                          <Paper variant="outlined" sx={{ p: 3, bgcolor: "#F9FAFB", borderRadius: 2 }}>
                            <Stack spacing={2.5}>
                              <Typography variant="subtitle1" fontWeight={600}>
                                Worker Details
                              </Typography>

                              <FormControl fullWidth error={!!errors.experience}>
                                <InputLabel>Experience</InputLabel>
                                <Select
                                  name="experience"
                                  value={formData.experience}
                                  onChange={handleChange}
                                  label="Experience"
                                >
                                  <MenuItem value="0-1">Less than 1 year</MenuItem>
                                  <MenuItem value="1-3">1-3 years</MenuItem>
                                  <MenuItem value="3-5">3-5 years</MenuItem>
                                  <MenuItem value="5-10">5-10 years</MenuItem>
                                  <MenuItem value="10+">More than 10 years</MenuItem>
                                </Select>
                                {errors.experience && (
                                  <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                                    {errors.experience}
                                  </Typography>
                                )}
                              </FormControl>

                              <TextField
                                fullWidth
                                label="Hourly Rate (₹)"
                                name="hourlyRate"
                                value={formData.hourlyRate}
                                onChange={handleChange}
                                error={!!errors.hourlyRate}
                                helperText={errors.hourlyRate}
                                placeholder="e.g., 500"
                                type="number"
                              />

                              <TextField
                                fullWidth
                                label="Bio"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                placeholder="Tell customers about yourself..."
                                multiline
                                rows={3}
                              />
                            </Stack>
                          </Paper>
                        </Fade>
                      )}

                      {/* Buttons */}
                      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                        <Button 
                          variant="outlined" 
                          onClick={() => setStep(1)} 
                          fullWidth 
                          sx={{ 
                            py: 1.5,
                            borderColor: "#FF6B35",
                            color: "#FF6B35",
                            "&:hover": {
                              borderColor: "#e85d2a",
                              backgroundColor: "rgba(255, 107, 53, 0.05)",
                            },
                          }}
                        >
                          ← Back
                        </Button>
                        <Button 
                          variant="contained" 
                          type="submit" 
                          fullWidth 
                          sx={{ 
                            py: 1.5,
                            background: "linear-gradient(135deg, #FF6B35, #e85d2a)",
                            boxShadow: "0 4px 15px rgba(255, 107, 53, 0.4)",
                            "&:hover": {
                              background: "linear-gradient(135deg, #e85d2a, #d94d1f)",
                              boxShadow: "0 6px 20px rgba(255, 107, 53, 0.5)",
                            },
                          }}
                        >
                          {formData.skills.length > 0 ? "Register as Worker" : "Register as Customer"}
                        </Button>
                      </Stack>
                      
                    </Stack>
                  </Fade>
                )}

              </Stack>
            </form>

            {/* Footer */}
            <Typography variant="body2" textAlign="center" sx={{ color: "#6B7280" }}>
              Already have an account?{" "}
              <Link 
                to="/login" 
                style={{ 
                  color: "#FF6B35", 
                  fontWeight: 600, 
                  textDecoration: "none",
                }}
              >
                Log in
              </Link>
            </Typography>

          </Stack>
        </Paper>
      </Fade>

      {/* ========================================
          ANIMATIONS - KEYFRAMES
      ======================================== */}
      
      {/* <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style> */}
    </Box>
  );
}