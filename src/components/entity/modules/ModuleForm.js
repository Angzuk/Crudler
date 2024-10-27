import { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import API from '../../API/API';
import Icons from '../../UI/Icons';
import Form from '../../UI/Form';


const defaultModule = {
    ModuleID: null, 
    ModuleCode: null,
    ModuleName: null,
    ModuleLevel: null,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleLeaderName: null,
    ModuleImageURL: null, 
  }

const ModuleForm = ({ originalModule, onSubmit, onCancel }) => {
    // Initialisations ---------------------
    defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
    defaultModule.ModuleImageURL = 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg';

    const yearsEndpoint = 'https://softwarehub.uk/unibase/api/years';

    const levels = [
        { value: 3, label: '3 (Foundation)' },
        { value: 4, label: '4 (First year)' },
        { value: 5, label: '5 (Second year)' },
        { value: 6, label: '6 (Final year)' },
        { value: 7, label: '7 (Masters)' },
    ];

    // State -------------------------------
    const [module, setModule] = useState(originalModule || defaultModule);

    const [years, setYears] = useState([]); 
    const [isYearsLoading, setIsYearsLoading] = useState(true);

    const loadYears = async (endpoint) => {
        const response = await API.get(endpoint);
        setIsYearsLoading(false);
        if(response.isSuccess) setYears(response.result);
      };
      
      useEffect( () => { loadYears(yearsEndpoint) }, [] );

    // Handlers ----------------------------
    const handleChange = (field, value) => setModule( {...module, [field]: value } );
    const handleSubmit = () => onSubmit(module);

    const cohorts = years.map((year) => ({ value: year.YearID, label: year.YearName }));

    // View --------------------------------
    const submitLabel = originalModule ? 'Modify' : 'Add';
    const submitIcon = originalModule ? <Icons.Edit/> : <Icons.Add/>;
    return (
        <Form 
            onSubmit={handleSubmit} 
            onCancel={onCancel} 
            submitLabel={submitLabel}
            submitIcon={submitIcon} 
        >

            <Form.InputText 
                label="Module code"
                value={module.ModuleCode}
                onChange={(value) => handleChange('ModuleCode',value)}
            />

            <Form.InputText 
                label="Module name"
                value={module.ModuleName}
                onChange={(value) => handleChange('ModuleName',value)}
            />

            <Form.InputSelect 
                label="Module level"
                prompt="Select module level ..."
                options={levels}
                value={module.ModuleLevel}
                onChange={(value) => handleChange('ModuleLevel',value)}
            />

            <Form.InputSelect 
                label="Module cohort"
                prompt="Select module cohort ..."
                options={cohorts}
                value={module.ModuleYearID}
                onChange={(value) => handleChange('ModuleYearID',value)}
                isLoading = {isYearsLoading}
            />

            <Form.InputText 
                label="Module leader"
                value={module.ModuleLeaderName}
                onChange={(value) => handleChange('ModuleLeaderName',value)}
            />

            <Form.InputText 
                label="Module image URL"
                value={module.ModuleImageURL}
                onChange={(value) => handleChange('ModuleImageURL',value)}
            />

        </Form>
    );
};

const styles = StyleSheet.create({
    
});

export default ModuleForm;

