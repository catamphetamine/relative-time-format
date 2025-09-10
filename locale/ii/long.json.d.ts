import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ii';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;