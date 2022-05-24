import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GM';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;