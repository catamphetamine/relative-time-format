import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'nl';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;