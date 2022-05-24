import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'as';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;