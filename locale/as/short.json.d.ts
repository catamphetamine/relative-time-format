import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'as';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;