import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'nl';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;