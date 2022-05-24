import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ps';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;