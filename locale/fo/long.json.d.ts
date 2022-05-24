import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fo';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;