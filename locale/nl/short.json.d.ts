import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'nl';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;